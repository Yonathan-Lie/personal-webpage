export default function About() {
    return (
        <div className="container mx-auto px-36 h-screen bg-secondary">
            <div className={"content-center"}>
                <div className="grid grid-cols-5 grid-rows-5 gap-4">
                    <div className="col-start-2 border text-end">
                        <h1>Name</h1>
                        <p>Desc</p>
                        <div>icons to contact</div>
                    </div>
                    <div className="col-span-2 col-start-3 border text-center">pic here</div>
                </div>
            </div>
        </div>
    )
}