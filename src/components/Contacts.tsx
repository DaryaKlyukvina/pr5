import { use } from "react";

const fetchData: Promise<{
    name: string;
    email: string;
    phone: string;
}> = new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            name: "Вася Пупкин",
            email: "vasya.pupkin@example.ru",
            phone: "+7 123 456-78-90",
        });
    }, 1000);
});

export default function Contacts() {
    const data = use(fetchData);

    return (
        <div className="contacts">
            <h2>{data!.name}</h2>
            <p>{data!.email}</p>
            <p>{data!.phone}</p>
        </div>
    );
}
