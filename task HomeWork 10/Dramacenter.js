const hospitalName = "Drama Center";
function showHospitalInfo() {
    console.log(`Welcome to ${hospitalName}`);
    console.log("Doctors Available:");
    console.log("Dr. R.B. Singh - General Physician");
    console.log("Dr. Sethi - Specialist");
    console.log("Dr. Sardar Pankaj Singh - Super Specialist");
    console.log("Dr. Ranjana Pathak - AYUSH");
}
function generalPhysician() {
    console.log("General Physician treats common illnesses.");
}
function specialists() {
    console.log("Cardiologist");
    console.log("Neurologist");
    console.log("Orthopedic Surgeon");
    console.log("Pediatrician");
    console.log("Gynecologist");
    console.log("Dermatologist");
}
function superSpecialists() {
    console.log("Interventional Cardiologist");
    console.log("Neurosurgeon");
    console.log("Oncologist");
}
function ayushDoctors() {
    console.log("Ayurveda");
    console.log("Yoga");
    console.log("Unani");
    console.log("Siddha");
    console.log("Homeopathy");
}
let patients = [];
function addPatient(name, age, gender, contact) {
    patients.push({
        id: Date.now(),
        name,
        age,
        gender,
        contact
    });
}
function showPatients() {
    console.table(patients);
}

function updatePatient(id, newDetails) {
    const patient = patients.find(p => p.id === id);

    if (patient) {
        Object.assign(patient, newDetails);
    }
}

function deletePatient(id) {
    patients = patients.filter(p => p.id !== id);
}


let appointments = [];

function bookAppointment(patient, doctor, date) {
    appointments.push({
        id: Date.now(),
        patient,
        doctor,
        date
    });
}

function showAppointments() {
    console.table(appointments);
}

function cancelAppointment(id) {
    appointments = appointments.filter(a => a.id !== id);
}


let bills = [];

function generateBill(
    patient,
    consultationFee,
    medicineCost,
    testCost
) {
    const total =
        consultationFee +
        medicineCost +
        testCost;

    bills.push({
        id: Date.now(),
        patient,
        consultationFee,
        medicineCost,
        testCost,
        total
    });
}

function showBills() {
    console.table(bills);
}

function deleteBill(id) {
    bills = bills.filter(b => b.id !== id);
}

let inventory = [];

function addItem(name, quantity, price) {
    inventory.push({
        id: Date.now(),
        name,
        quantity,
        price
    });
}

function showInventory() {
    console.table(inventory);
}

function updateItem(id, newDetails) {
    const item = inventory.find(i => i.id === id);

    if (item) {
        Object.assign(item, newDetails);
    }
}

function deleteItem(id) {
    inventory = inventory.filter(i => i.id !== id);
}

function checkLowStock(threshold) {
    return inventory.filter(
        item => item.quantity <= threshold
    );
}
const users = [
    {
        username: "admin",
        password: "admin123",
        role: "Admin"
    },
    {
        username: "doctor",
        password: "doc123",
        role: "Doctor"
    },
    {
        username: "reception",
        password: "rec123",
        role: "Receptionist"
    }
];

let currentUser = null;

function login(username, password) {
    const user = users.find(
        u =>
            u.username === username &&
            u.password === password
    );

    if (user) {
        currentUser = user;
        console.log(
            `Welcome ${user.username}`
        );
    } else {
        console.log("Invalid Credentials");
    }
}

function logout() {
    currentUser = null;
    console.log("Logged Out");
}

function checkAccess(role) {
    return (
        currentUser &&
        currentUser.role === role
    );
}

showHospitalInfo();

login("admin", "admin123");

addPatient(
    "Devansh",
    22,
    "Male",
    "9876543210"
);

showPatients();

bookAppointment(
    "Devansh",
    "Dr. Sethi",
    "20-06-2026"
);

showAppointments();

generateBill(
    "Devansh",
    500,
    1000,
    700
);

showBills();