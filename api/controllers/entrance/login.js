// module.exports = {


//   friendlyName: 'Login',


//   description: 'Login user.',


//   inputs: {
//     email: {
//       example: 'sgress454@gmail.com',
//       required: true,
//       description: 'The email of the user to log in.'
//     }
//   },


//   exits: {

//     notFound: {
//       responseType: 'notFound'
//     }

//   },


//   fn: function (inputs, exits) {

//     // If there's already a user logged in, just send the
//     if (this.req.session.user.id) {
//       return exits.success({ id: this.req.session.user.id });
//     }

//     // Attempt to find a user with the specified username.
//     User.findOne({email: inputs.email})
//     .exec(function(err, user) {
//       if (err) {return exits.error(err);}

//       // If no such user exists, return a 404.  The client will respond by attempting to
//       // create the user.
//       if (!user) {return exits.notFound(); }

//       // Set the user ID in the session.
//       this.req.session.user.id = user.id;

//       // Create an admin chat message.
//       ChatMessage.create({
//         text: user.email + ' joined the room.'
//       })
//       .meta({fetch: true})
//       .exec(function(err, message) {
//         if (err) { return exits.serverError(err); }
//         // Blast the message to all connected sockets.
//         sails.sockets.blast('chatmessage', {
//           verb: 'created',
//           id: message.id,
//           data: {
//             text: message.text
//           }
//         });
//       });

//       // Return the logged-in user info through the `success` exit.
//       return exits.success(user);

//     });


//   }


// };
