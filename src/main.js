import { TwitterClient } from 'twitter-api-client'
import { config as dotenv } from 'dotenv'

// load in the env variables
dotenv()

// twitter client object
const twitterClient = new TwitterClient({
    apiKey: process.env.TWITTER_API_KEY,
    apiSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

// bell hashtag
const tag = '#BellLetsTalk'

// list of tweet options
const tweets = [
  `Tweeting for ${tag} a bunch of times.`,
  `Tweeting out for ${tag}, got a bunch more of these!`,
  `Guys, it's time for ${tag} so you better get tweeting!`,
  `I am once again here to tell you that it is ${tag} day, so that Bell spends more money!`,
  `This is not the first, and it wont be the last time that I tweet about ${tag}`,
  `I am tweet. Here is a hashtag: ${tag}`,
  `Man I am keep coming up with more things to write about for ${tag} day.`,
  `Hopefully this tweet isn\'t the one I just sent! Anyway, ${tag}`,
  `I am once again asking for Bell's financial support ${tag}`,
  `Guys! Come on! Just make Bell spend more money! It's time for ${tag}`,
  `Been a while since I've last tweeted about ${tag}, hasn't it?`,
  `What if I sent another tweet about ${tag}, that would be crazy wouldn't it?`,
  `I just want to make Bell spend more money, I guess I'll do it again: ${tag}`,
  `Knock knock\n\nWho's there?\n\n${tag} day!`
]

// send the tweet
const sendTweet = () => {
  twitterClient.tweetsV2.createTweet({
    text: tweets[Math.floor((Math.random() * tweets.length))]
  }).then(() => {
    console.log('Tweeted again.')
  }).catch(err => console.error('Didn\'t tweet: ' + err))
}

console.log('Tweeter started up!')

// the interval to tweet at
// 36 seconds amounts to 2400 tweets in a day, which is the most allowed by the API
const interval = 36

// run it every minute
setInterval(sendTweet, interval * 1000)

