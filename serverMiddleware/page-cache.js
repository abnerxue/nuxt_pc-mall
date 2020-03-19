const LRU = require('lru-cache')

let cacheStore = new LRU({
 max: 1000,     // 设置最大的缓存个数
 maxAge: 1000
})

module.exports.cacheSeconds = function (secondsTTL, cacheKey) {
 // 设置缓存的时间
 const ttl = secondsTTL * 1000
 return function (req, res, next) {
  // 获取缓存的key值
  let key = req.originalUrl
  if (typeof cacheKey === 'function') {
   key = cacheKey(req, res)
   if (!key) { return next() }
  } else if (typeof cacheKey === 'string') {
   key = cacheKey
  }

  // 如果缓存命中，直接返回
  const value = cacheStore.get(key)
  if (value) {
   return res.end(value, 'utf-8')
  }

  // 缓存原先的end方案
  res.original_end = res.end

  // 重写res.end方案，由此nuxt调用res.end实际上是调用该方法，
  res.end = function () {
   if (res.statusCode === 200) {
    // 设置缓存
    cacheStore.set(key, data, ttl)
   }
   // 最终返回结果
   res.original_end(data, 'utf-8')
  }
 }
}