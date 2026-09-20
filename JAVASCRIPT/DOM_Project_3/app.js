const users = [
    {
        id: 1,
        profileUrl: "https://i.pravatar.cc/150?img=1",
        name: "John Doe",
        email: "john@example.com"
    },
    {
        id: 2,
        profileUrl: "https://i.pravatar.cc/150?img=2",
        name: "Emma Smith",
        email: "emma@example.com"
    },
    {
        id: 3,
        profileUrl: "https://i.pravatar.cc/150?img=3",
        name: "Michael Brown",
        email: "michael@example.com"
    },
    {
        id: 4,
        profileUrl: "https://i.pravatar.cc/150?img=4",
        name: "Sophia Wilson",
        email: "sophia@example.com"
    },
    {
        id: 5,
        profileUrl: "https://i.pravatar.cc/150?img=5",
        name: "David Miller",
        email: "david@example.com"
    },
    {
        id: 6,
        profileUrl: "https://i.pravatar.cc/150?img=6",
        name: "Olivia Davis",
        email: "olivia@example.com"
    },
    {
        id: 7,
        profileUrl: "https://i.pravatar.cc/150?img=7",
        name: "James Wilson",
        email: "james@example.com"
    },
    {
        id: 8,
        profileUrl: "https://i.pravatar.cc/150?img=8",
        name: "Ava Taylor",
        email: "ava@example.com"
    }
];

let userList = document.getElementById("userList");
let searchInp = document.getElementById("searchInp");


let render = function (list) {
    userList.innerHTML = "";

    if (list.length === 0) {
        userList.innerHTML = "<p class='no-user'>No user found</p>";
        return;
    }

    list.forEach((user) => {
        let { name, profileUrl, email } = user;
        let div = document.createElement("div");
        div.className = "user-item";
        div.innerHTML = `
            <img src="${profileUrl}" alt="${name}" />
            <div class="user-info">
                <h2>${name}</h2>
                <p>${email}</p>
            </div>
        `;
        userList.append(div);
    });
};

render(users);

function searchUser(e) {
    let val = e.target.value.trim().toLowerCase();

    let filterUser = users.filter((user) => {
        let { name, email } = user;
        return (
            name.toLowerCase().includes(val) ||
            email.toLowerCase().includes(val)
        );
    });

    render(filterUser);
}

searchInp.addEventListener("input", searchUser);
