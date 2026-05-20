import { lazy, Suspense } from "react";

const Contacts = lazy(() => import("../components/Contacts"));

export default function AboutPage() {
    return (
        <div className="page">
            <h1>О нас</h1>
            <p>Информация о нашей команде</p>

            <Suspense fallback={<div>Загрузка контактов...</div>}>
                <Contacts />
            </Suspense>
        </div>
    );
}
