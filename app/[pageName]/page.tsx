export function generateStaticParams() {
    return [
        { pageName: "page1" },
        { pageName: "page2" },
        { pageName: "page3" },
        { pageName: "page4" },
        { pageName: "page5" },
        { pageName: "page6" }
    ]
}

export default function Page({ params: { pageName } }: {
    params: { pageName: string; }
}) {
    return (<>{pageName} </>);
}