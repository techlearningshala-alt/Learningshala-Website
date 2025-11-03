import { hookstate } from "@hookstate/core";

export const globalStore = hookstate({
    email: "abc@gmail.com",
    helpDeskEmail: "helpdesk@learningshala.com",
    phone: "9717260641",
    address: "1 Eagle St, Brisbane, QLD, 4000",
    location: "https://maps.app.goo.gl/qyv9HpwqRzmyYTw56",
    companyName: "Learning Shala",
    gstNumber: "12345678901234",
});
