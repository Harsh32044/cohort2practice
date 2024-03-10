// function VideoCard() {
//   return (
//     <div className="p-5">
//       <div className="rounded-lg h-32 w-60 bg-green-500"></div>
//       <VideoCard2 />
//     </div>
//   );
// }

// function VideoCard2() {
//   return (
//     <div className="flex items-center">
//       <div className="rounded-full bg-red-400 h-10 w-10 mt-2"></div>
//       <div className="ml-2">Title of the Video</div>
//       {/* <div className="mx-4 text-gray-500">•</div> */}
//     </div>
//   );
// }

function VideoCard (props: any) {
    return <div className="m-4 inline-block">
        <img src={props.mainImg} alt="" className="rounded-xl w-full"/>
        <div className="grid grid-cols-12 pt-2 w-full">
            <div className="col-span-2">
                <img className="rounded-full w-10 h-10" src={props.image} alt=""/>
            </div>
            <div className="col-span-10">
                <div>{props.title}</div>
                <div className="col-span-11 text-gray-300 text-sm">{props.author}</div>
                <div className="col-span-11 text-gray-300 text-sm">{props.views} {parseInt(props.views) > 1 ? "Views" : "View"} | {props.timestamp}</div>
            </div>
        </div>
    </div>
}

export default VideoCard;
