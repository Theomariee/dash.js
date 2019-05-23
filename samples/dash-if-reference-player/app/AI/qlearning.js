

// Buffer states : 
// A --> 0-39%
// B --> 40-50% goal state
// C --> 51-100%

// Bitrate states :
// 0 --> Lowest bitrate
// 1 --> 2nd bitrate
// X --> Xth bitrate
// 9 --> Highest bitrate

// Actions :
// 0 --> Lower the bitrate
// 1 --> Keep same bitrate
// 2 --> Up the bitrate

const m = 
[
  //↓   =    ↑  name
  [-1, 100, -1, '0A'],
  [-1, 100, -1, '0B'],
  [-1, -1, 100, '0C'],
  [100, -1, -1, '1A'],
  [-1, 100, -1, '1B'],
  [-1, -1, 100, '1C'],
  [100, -1, -1, '2A'],
  [-1, 100, -1, '2B'],
  [-1, -1, 100, '2C'],
  [100, -1, -1, '3A'],
  [-1, 100, -1, '3B'],
  [-1, -1, 100, '3C'],
  [100, -1, -1, '4A'],
  [-1, 100, -1, '4B'],
  [-1, -1, 100, '4C'],
  [100, -1, -1, '5A'],
  [-1, 100, -1, '5B'],
  [-1, -1, 100, '5C'],
  [100, -1, -1, '6A'],
  [-1, 100, -1, '6B'],
  [-1, -1, 100, '6C'],
  [100, -1, -1, '7A'],
  [-1, 100, -1, '7B'],
  [-1, -1, 100, '7C'],
  [100, -1, -1, '8A'],
  [-1, 100, -1, '8B'],
  [-1, -1, 100, '8C'],
  [100, -1, -1, '9A'],
  [-1, 100, -1, '9B'],
  [-1, 100, -1, '9C'],
]

let qTable = []

var gamma = 0.9
var alpha = 0.1
var epsilon = 0.1
var min_epsilon = 0.01
var max_epsilon = 1.0
var decay_rate = 0.01
var NB_EPOCHS = 10
var totalEpochs = 0
var totalPenalities = 0

var state = 0

function train() {
  console.log('[QLEARNING] Starting qLearning')

  initQTable()

  for(var i = 0; i < NB_EPOCHS; i++) {
    console.log('[QLEARNING] Epoch number ' + i)
    setQuality(0)
    
    var done = false
    var action = null 
    var reward = null
    var next_max = null
  
    var correctStreaks = 0
    var errorStreaks = 0
    
    while(!done) {
      if( Math.random() < epsilon ) {
        action = getRandomInt(0, 2)
      } else {
        action = getBestActionForState(state)
      }
      console.log('[QLEARNING] Action taken = '+ action)
      console.log('[QLEARNING] Buffer Length = ' + getBufferLength())

      setAction(action)
  
      //Wait before findNextState
      findNextState(state, action).then((next_state) => {
        console.log('[QLEARNING] findNextState passé')

        next_max = getBestValueForState(next_state)
        reward = m[state][action]
        console.log('[QLEARNING] Modifying qTable');
        qTable[state][action] = 
            qTable[state][action] + alpha * (reward + gamma * next_max - qTable[state][action])
        console.log('[QLEARNING] qTable modified');
        
        if (reward < 0) {
          totalPenalities++
          errorStreaks++
          correctStreaks = 0
        } else {
          correctStreaks++
          errorStreaks = 0
        }
        
        if((correctStreaks > 15 || errorStreaks > 15)) {
          done = true
        }
        
        state = next_state
        totalEpochs++
      })
    } 
    epsilon = min_epsilon + (max_epsilon - min_epsilon) * Math.exp(-0.1 * epsilon)
  }
  console.log(qTable)
}


function initQTable() {
  console.log('[QLEARNING] Initiliazing qTable...')
  qTable = new Array(30)
  const dict = [[0, 'A'], [1, 'B'], [2, 'C']]
  for(var i = 0; i < 30; i++) {
    qTable[i] = new Array(4).fill(0)
    var bitrate = Math.floor(i / 3)
    var bufferState = dict[i % 3][1]
    qTable[i][3] = bitrate + '' + bufferState
  } 
}

async function findNextState(state, action) {
  await timeout(1000)
  const bufferLength = getBufferLength()
  console.log('[QLEARNING] Buffer length: ' + bufferLength)
  var nextState = (Math.floor(state / 3) + action - 1) * 3

  if (bufferLength > 13) {
    nextState += 2
  }
  else if(bufferLength > 7) {
    nextState += 1
  } 
  console.log('[QLEARNING] Initial state: ' + state + ' Next state: ' + nextState)
  return nextState
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getBestActionForState(state) {
  var bestAction = 0
  var bestValue = Number.MIN_SAFE_INTEGER
  for(var i = 0; i < 3; i++) {
    if(qTable[state][i] > bestValue) {
      bestAction = i
    }
  } 
  return bestAction
}

function getBestValueForState(state) {
  console.log('[QLEARNING] State to getBestValueForState: ' + state)
  return Math.max(qTable[state][0], qTable[state][1], qTable[state][2])
}

function setAction(action) {
  if(action == 0) {
    console.log('[QLEARNING] Giving the order to downgrade quality')
    downgradeQuality()
  }
  else if(action == 2) {
    console.log('[QLEARNING] Giving the order to upgrade quality')
    upgradeQuality()
  }
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}