"use strict";
class EventAction {
    trigger(delay = 0) {
        console.log(`Event trigged in ${delay}s`);
    }
}
class NotificationEvent extends EventAction {
    sendEmail() {
        console.log("Sending Email");
    }
}
const ev = new NotificationEvent();
ev.trigger();
ev.sendEmail();
ev.trigger(10);
