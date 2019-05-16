var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/projectclms");

var Schema = mongoose.Schema;

var userSchema = new Schema ({
  username: String,
  password: String,
  usertype: String,
  versionKey: false
});

var contactsSchema = new Schema ({
  username: String,
  contactlist: [{
    _id: false,
    ctc_name: String,
    ctc_phone: Number,
    ctc_address: {
        apt_no: String,
        street_add: String,
        zip_code: Number
    }
  }],
  versionKey: false
});


var User = mongoose.model('users' , userSchema);
var Contacts = mongoose.model('contacts', contactsSchema);

exports.login = function(req,res) {
     User.findOne({username: req.body.username, password: req.body.password}, 'username password usertype' , function(err,docs){
          if(err) {
            console.log
            return err;
          }
          if(docs === null || docs) {
             console.log(docs);
             res.json(docs);
          }
      });
};

exports.users = function(req,res) {
      User.find({}, function(err,docs) {
             if (err) {console.log(err);}
             if (docs) { res.json(docs); }
      });
};

exports.createuser = function(req,res) {
        console.log(req.body);
        User.create({"username": req.body.username, "password": req.body.password,
              "usertype": req.body.usertype}, function(err,body) {
              if (err) { return err; }
              console.log(body);
              res.status(201).json(body);
        });
};

exports.updateuser = function(req,res) {
        User.updateOne({"username": req.body.user.username},
        {$set: {"usertype": req.body.user.usertype}},function(err,body) {
            if (err) { return err;  }
            res.json(body);
        });
};

exports.deleteuser = function(req,res) {
        User.deleteOne({ "_id": req.body.user._id,  "username": req.body.user.username},
            function(err,body) {
               if (err) { return err;  }
               if(body) {
                 Contacts.deleteMany({"username": req.body.user.username}, function(err,body){
                   if (err) { return err;  }
                   if (body) { res.json(body); }
                 });
               }
        });
};

exports.contacts = function(req,res) {
      Contacts.updateOne({username: req.query.username}, {$pull: {contactlist: null}}, function(err,Contacts) {
           if(err) {console.log(err);}
      });
      Contacts.findOne({username: req.query.username}, 'contactlist' , function(err,docs){
          if(err) {
            console.log(err);
            return err;
          }
          if(docs) {
              console.log('fetch contact :'+docs);
              res.json(docs);
          }
      });
};

exports.createcontact = function(req,res) {
        var x = req.body.contact;
        Contacts.findOne({"username":req.body.username}, function (err, body) {
                 if (err) { console.log(err); return err; }
                 if (body === null) {
                    Contacts.create({"username":req.body.username, "contactlist": {"ctc_name": x.ctc_name, "ctc_phone": x.ctc_phone,
                   "ctc_address" : { "apt_no": x.ctc_address.apt_no , "street_add": x.ctc_address.street_add,
                    "zip_code": x.ctc_address.zip_code }}}, 'contactlist', function(err,body) {
                                       if (err) { console.log(err); return err;}
                                       if (body) {
                                           console.log('created :' +body);
                                           res.status(201).json(body);
                                       }
                      });
                 }
                 else {
                      Contacts.updateOne({"username":req.body.username},
                      {$push: {"contactlist": {"ctc_name": x.ctc_name, "ctc_phone": x.ctc_phone,
                       "ctc_address" : { "apt_no": x.ctc_address.apt_no , "street_add": x.ctc_address.street_add,
                       "zip_code": x.ctc_address.zip_code}}}},function(err,Contact) {
                                 if (err) {
                                     return err;
                                 }
                                 if(Contact) {
                                  console.log("Updated : " +Contact);
                                  res.status(201).json(Contact);
                                 }
                       });
                 }
        });
};

exports.updatecontact = function(req,res) {
        Contacts.updateOne({"username":req.body.username, "contactlist.ctc_name": req.body.contact.ctc_name},
        {$set: {"contactlist.$": req.body.contact}},function(err,Contacts) {
            if (err) { return err;  }
            res.status(201).json(Contacts);
        });
};

exports.deletecontact = function(req,res) {
        var unset = {};
        unset['$unset'] = {};
        unset.$unset['contactlist.' + req.body.id] = 1;
        Contacts.updateOne({"username":req.body.username}, unset, function(err,body) {
            if (err) {
                console.log (err) ;
                return err;
            }
            if (body) {
               console.log("Contact " +body);
               Contacts.updateOne({username: req.body.username}, {$pull: {contactlist: null}}, function(err,body) {
                 if(err) {console.log(err);}
                 if(body) {
                    Contacts.findOne({username: req.body.username}, 'contactlist' , function(err,docs){
                      if(err) {
                         console.log(err);
                         return err;
                      }
                      if(docs) {
                         console.log('fetch contact :'+docs);
                         res.json(docs);
                      }
                });
              }
            });
          }
       });
};
