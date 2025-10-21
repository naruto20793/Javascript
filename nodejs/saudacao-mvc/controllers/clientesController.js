module.exports = {
  
    clientes: (req, res) => { 
        res.sendFile('clientes.html', { root: './views' });
    },

    login: (req, res) => { 
        res.send('login.html', { root: './views' });
    }
    
};