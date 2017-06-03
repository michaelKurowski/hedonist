const URL_START = window.location.protocol + '//' + window.location.host + '/api'
const ID_URL = '/beer/:term'
const RANDOM_URL = '/beer/random/'

const stockImages = [
    'https://i.imgur.com/z7bpu3P.png',
    'https://i2.wp.com/steamworksbrewing.com/wp-content/uploads/2016/09/pale_ale.png'
]


 const httpRequest = (url, method, data = null) => {

        if(method === 'GET'){
            let foo = new Promise((res,err) => {
            $.get(url, result => res(result))
            })
            return foo;
        }
    
        else if (method === 'POST'){
        let foo = new Promise((res,err) => {
            console.log('POST:', url, data)
            $.ajax({
                type: method,
                url: url,
                data: JSON.stringify(data),
                success: (data => res(data)),
                error: e => console.log('POST Error', e),
                dataType: 'json',
                contentType: 'application/json'
            })
            })
        return foo;
        }
}


const OptionsToAPI = (option, id) => {
        let URL = URL_START;
        console.log('OptionToAPI:', option)
        switch(option){
            case 'ID':
            return URL += `/beer/${id}`
            case 'NAME':
            return URL += `/beer/${id}`
            case 'RANDOM':
            return URL += RANDOM_URL
             case 'BOTD':
            return URL += '/beer/beerOfTheDay'
            case 'VARIATIONS':
            return URL += `/beer/${id}/variations`
            case 'SOCIAL' :
            return URL += `/beer/${id}/socialAccounts`
            case 'INGREDIENTS':
            return URL += `/beer/${id}/ingredients`
            case 'INGREDIENT_DETAILS':
            return URL += `/beer/${id}/ingredients/details`
            case 'BREWERIES':
            return URL += `/brewery/${id}`
            case 'OTHERS_SOLD':
            return URL += `/brewery/${id}/beer`
        }
    }

const beerImage = () => {
        let index = Math.floor(Math.random() * stockImages.length)
        return stockImages[index];
    }

module.exports = {

    QuerySearch: (params,callback) => {
        console.log('Params:', params)
        let URL = OptionsToAPI(params.API, params.term);
        console.log('Query URL', URL)
       httpRequest(URL, 'GET').then(res => callback(res)) // callback(res))
    },

    ParseJSON: (json) => {
        console.log('JSON', json)
        
        let result = {
            id: json.id,
         data: {
           name: json.name,
           imgURL: verifyImages(),
           desc: json.description || 'This beer has no description...'
            },
        brewData: {
           name: json.style.name,
           desc: json.style.description || 'This brewer has no description...'
            }
        }
        function verifyImages(){
       if (json.hasOwnProperty('labels.medium') && json['labels.medium'] ){
           return json.labels.medium;
       }
       return beerImage();
        }
        console.log(result)
        return result;
    },

    loginToServer: () => {

        httpRequest('http://localhost:80/authenticate/signIn', 'POST', 
        {
        'username': 'testUser',
        'password': 'bfb0dhedonistAdmin37b45dc1'
        }).then(res => console.log('Login:', res))
    },
    registerUser: (username, password, email) => {
        httpRequest('http://localhost:80/authenticate/signUp', 'POST',
            {
                'username' : username,
                'password' : password,
                'email' : email
            }
        )
    }
}

