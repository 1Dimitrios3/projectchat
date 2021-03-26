/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */ 

const isLoggedIn = require("../api/policies/isLoggedIn");
const formCheck = require("../api/policies/formCheck");
const trainingCheck = require("../api/policies/trainingCheck");
const membershipAccess = require("../api/policies/membershipAccess");
const membershipCheck = require("../api/policies/membershipCheck");
const specialMembershipCheck = require("../api/policies/specialMembershipCheck");
const createMembCheck = require("../api/policies/createMembCheck");
const isAdmin = require("../api/policies/isAdmin");

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  'account/signup2':formCheck,
  'account/detailsuser':isLoggedIn,
  'account/trainer': ['isloggedIn', 'membershipCheck'],
  'account/trainer2':trainingCheck,
  'membership/getmembership': membershipAccess,
  'dev/getspecialmembership': isLoggedIn,
  'membership/getspecialmembership': specialMembershipCheck,
  'membership/createmembership2': createMembCheck,
  'admindash/addlocation': isAdmin,
  'admindash/userlist': isAdmin,
  'membership/createmembership': isAdmin,
  'admindash/deletelocation': isAdmin,
  'membership/editmembership': isAdmin,
  'account/deletetraining': isLoggedIn
};

