const express = require("express");
const signupRouter = require("../routes/signUp");
const loginRouter = require("../routes/login");
const sessionRouter = require("../routes/session");
const userRouter = require("../routes/user");
const candidateRouter = require("../routes/candidate");
const KycRouter = require("../routes/kyc");
const invitationRouter = require("../routes/invitation");
const teamRouter = require("../routes/team");
const taskRouter = require("../routes/task");
const logsRouter = require("../routes/ActivityLogs");
const eventsRouter = require("../routes/Events");

const notificationsRouter = require("../routes/notifications");

module.exports = function (app) {
  app.use("/votex/api/signup", signupRouter);
  app.use("/votex/api/login", loginRouter);
  app.use("/votex/api/sessions", sessionRouter);
  app.use("/votex/api/users", userRouter);
  app.use("/votex/api/teams", teamRouter);
  app.use("/votex/api/tasks", taskRouter);
  app.use("/votex/api/notifications", notificationsRouter);
  app.use("/votex/api/invitations", invitationRouter);
  app.use("/votex/api/activityLogs", logsRouter);
  app.use("/votex/api/events", eventsRouter);
  app.use("/votex/api/kyc", KycRouter);
  app.use("/votex/api/sessions/:sessionId/candidate", candidateRouter);
};
//dont bother with this file . it just makes the routes work
