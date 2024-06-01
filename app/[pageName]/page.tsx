export function generateStaticParams() {
    return [
        { pageName: "page1" },
        { pageName: "page2" },
        { pageName: "page3" },
        { pageName: "page4" },
        { pageName: "page5" },
        { pageName: "page6" },
        { pageName: "CMajor" },
        { pageName: encodeURIComponent("C Major") },
        { pageName: "Cb%20Major" },
        { pageName: "C-Major" },
        { pageName: "C_Major" },
    ]
}

export default function Page({ params: { pageName } }: {
    params: { pageName: string; }
}) {
    return (<>{pageName} </>);
}