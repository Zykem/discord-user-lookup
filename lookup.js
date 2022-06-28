const fetch = require("node-fetch")

// You might want to store this in an environment variable or something
const token = 'your_token_to_authorize_discord'
const readline = require('readline').createInterface({

    input: process.stdin,
    output: process.stdout

});



const fetchUser = async id => {
  const response = await fetch(`https://discord.com/api/v9/users/${id}`, {
    headers: {
      Authorization: `Bot ${token}`
    }
  })
  if (!response.ok) throw new Error(`Error status code: ${response.status}`)
  return response.json()
}

function main() {

    readline.question('DiscordID: ', id => {

        console.log('\nID enterred. Sending request to https://discord.com/api/v9/users/' + id)
        fetchUser(id).then(function(result) {
            console.log('Fetched user! Here is JSON data about the User\n')
            console.log(result)
        
        })

    })

}
main()
