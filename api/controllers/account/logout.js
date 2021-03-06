module.exports = {
    
    // exits : {
    //     success : {
    //         viewTemplatePath : 'pages/homepage2'
    //     }
    // },

    fn: async function() {
        if (this.req.session){
            console.log(`Requested logout of user : ${this.req.session.user.id}` )
            this.req.session.destroy(function (err) {
                if(err){
                    console.log(err)
                } 
            })  
        }

        // I changed the '/' route to listen to an action controller instea
        // Tried a redirect here to homepage in order to have a clean exit and be able to 
        //dynamically render the login/signup button on the homepage without an error

        this.res.redirect('/');
        // return {}
    }
}