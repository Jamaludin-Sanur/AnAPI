const request = require("supertest");
const App = require("../src/App");

describe("GET clinics by name", () => {
    test("GET clinic by name start with word 'scratch' ", async () => {
        const response = await request(App).get("/rest/public/clinics").query({ name: "scratch" }).expect(200);
        expect(response.body.data.clinicArray.length).toBe(3);
    })

    test("GET clinic by name contain word 'atch' in middle", async () => {
        const response = await request(App).get("/rest/public/clinics").query({ name: "atch" }).expect(200);
        expect(response.body.data.clinicArray.length).toBe(3);
    })

    test("GET clinic by name end with word 'pay'", async () => {
        const response = await request(App).get("/rest/public/clinics").query({ name: "pay" }).expect(200);
        expect(response.body.data.clinicArray.length).toBe(3);
    })
})

describe("GET clinics by state", () => {
    test("GET clinic by state name start with word 'calif' ", async () => {
        const response = await request(App).get("/rest/public/clinics").query({ state: "calif" }).expect(200);
        expect(response.body.data.clinicArray.length).toBe(2);
    })

    test("GET clinic by state code ", async () => {
        const response = await request(App).get("/rest/public/clinics").query({ state: "CA" }).expect(200);
        expect(response.body.data.clinicArray.length).toBe(4);
    })
})

describe("GET clinics by availability", () => {
    test("GET clinic by availability on '00:00' ", async () => {
        const response = await request(App).get("/rest/public/clinics").query({ availability: "00:00" }).expect(200);
        expect(response.body.data.clinicArray.length).toBe(3);
    })

    test("GET clinic by availability on '12:00' ", async () => {
        const response = await request(App).get("/rest/public/clinics").query({ availability: "12:00" }).expect(200);
        expect(response.body.data.clinicArray.length).toBe(13);
    })

    test("GET clinic by availability on '23:59' ", async () => {
        const response = await request(App).get("/rest/public/clinics").query({ availability: "23:59" }).expect(200);
        expect(response.body.data.clinicArray.length).toBe(3);
    })
})