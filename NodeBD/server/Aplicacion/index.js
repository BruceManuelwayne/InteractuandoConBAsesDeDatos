var express = require('express')
var Router = express.Router()
var mongoose = require('mongoose')
var User = require('../models.js')
var Events = require('../modelsEvent.js')
const session = require('express-session');


mongoose.connect('mongodb://localhost/dbagenda')

var sess;

Router.post('/login', async function (req, res) {
  const result = await User.find({ user: req.body.user, pass:  req.body.user });
  if (result.length == 1) {

    return res.json({ msg:"Validado", id:result[0].id });
  } else {
    return res.json({  msg: "Rechazado" });
  }
  })

  Router.post('/events/all', async function (req, res) {
    const result = await Events.find({ user_id: req.body.user_id});
    if (result.length > 0) {
      return res.json(result);
    } 
    })
  
    Router.post('/events/new', async function (req, res) {

      const result = await Events.find();
      let corr = result.length + 1
    let evento = new Events({ 
                          id : corr,
                          user_id: req.body.user_id, 
                          title:req.body.title,
                          start:req.body.start,
                          end:req.body.end,
                          allDay:req.body.allDay })

          evento.save((err) => {
            if (err) {
              console.log(err) 
              res.send("Invalido")
            }
            res.send("Valido")  
        });
      })
  
      Router.post('/events/delete/:id', async function (req, res) {
        const result = await Events.remove({ id: req.params.id}, 
          (error) => {
            if (error){
              res.send("Invalido")
            }
            res.send("Valido")
          });
        })

        Router.post('/events/update/:id', async function (req, res) {
          const result = await Events.update({ id: req.params.id}, {
          start: req.body.start_date,
          end: req.body.end_date 
        }, 
            (error) => {
              if (error){
                console.log(error) 
                res.send("Invalido")
              }
              console.log(req.params.id) 
              res.send("Valido")
            });
          })

      




module.exports = Router
