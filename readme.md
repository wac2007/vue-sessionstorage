# Vue SessionStorage
> A Simple Plugin to Deal with SessionStorage on Vue.js

This plugin is ready to work with Unit Tests mocking the sessionStorage.

## Install

```
npm install --save vue-sessionstorage
```

Put in your main.js
```javascript
import VueSessionStorage from 'vue-sessionstorage'
Vue.use(VueSessionStorage)
```

## Docs

### this.$session.get(key)
Get a value previously saved 

### this.$session.set(key, value)
Set a value in current session

### this.$session.exists(key)
Check if the current key exists in current session

### this.$session.remove(key)
Remove the chosen key from session

### this.$session.clear(key)
Clear all the current sessions


## Example

Let's suppose you are building a login system
```javascript
export default {
    name: 'login',
    methods: {
        doLogin() {
            axios.post('/login', {...}).then(response => {
                let username = response.data.username;
                this.$session.set('username', username); // Set the username in session Storage
            });
        }
    } 
    
}
```
