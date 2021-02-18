const { App, ExpressReceiver } = require('@slack/bolt');
const express = require('express');
const axios = require('axios');

const { config } = require('dotenv');

config();

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Bolt app is running! ⚡️');
})();
