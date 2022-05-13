const url = require('url')
const express = require('express')
const router = express.Router()
const needle = require('needle')
const apiCache = require('apicache')

const API_BASE_URL = process.env.API_BASE_URL
const API_KEY_NAME = process.env.API_KEY_NAME
const API_KEY_VALUE = process.env.API_KEY_VALUE

let cache = apiCache.middleware


router.get('/', cache('15 minutes'), async (req, res) => {
  try {
    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE,
      ...url.parse(req.url, true).query
    })

    const final_url = `${API_BASE_URL}?${params}`

    const apiResponse = await needle('get', `${final_url}`)

    res.json(apiResponse.body)

  } catch (error) {
    res.status(500).json(error)
  }
})


module.exports = router