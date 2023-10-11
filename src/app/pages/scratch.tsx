export default function Scratch(){
    return(
        <div className={"container bg-primary"}>
            <div className="grid grid-cols-4 grid-rows-3 gap-4 justify-center items-center">
                <div className="border row-span-2">1</div>
                <div className="border">2</div>
                <div className="border col-span-2">3</div>
                <div className="border row-span-2 col-start-4 row-start-2">4</div>
                <div className="border col-span-2 col-start-1 row-start-3">5</div>
                <div className="border col-span-2 col-start-2 row-start-2 text-center ">Tech Stack</div>
                <div className="border col-start-3 row-start-3">7</div>
            </div>
        </div>
    )
}