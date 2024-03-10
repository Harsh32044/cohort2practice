import VideoCard from "./VideoCard"

const VIDEO = [
    {
        title:"How to win friends and influence people | Summary by Harsh",
        image:"/NL.jpg",
        mainImg:"/photo.jpg",
        author:"Harsh Srivastav",
        views:"100M",
        timestamp:"1 year ago"
    },

    {
        title:"History 101 (Part - 1) | Full Docuseries",
        image:"/NL.jpg",
        mainImg:"/photo.jpg",
        author:"The History Project",
        views:"2M",
        timestamp:"6 months ago"
    },

    {
        title:"On Environmental issues and over-consumption | Acharya Prashant",
        image:"/NL.jpg",
        mainImg:"/photo.jpg",
        author:"Acharya Prashant",
        views:"500k",
        timestamp:"1 year ago"
    },

    {
        title:"Sold media outlets worshipping Modi amidst Manipur riots | NewsLaundry",
        image:"/NL.jpg",
        mainImg:"/photo.jpg",
        author:"newslaundry",
        views:"2M",
        timestamp:"5 days ago"
    },

    {
        title:"How to win friends and influence people | Summary by Harsh",
        image:"/NL.jpg",
        mainImg:"/photo.jpg",
        author:"Harsh Srivastav",
        views:"100M",
        timestamp:"1 year ago"
    },

    {
        title:"History 101 (Part - 1) | Full Docuseries",
        image:"/NL.jpg",
        mainImg:"/photo.jpg",
        author:"The History Project",
        views:"2M",
        timestamp:"6 months ago"
    },

    {
        title:"On Environmental issues and over-consumption | Acharya Prashant",
        image:"/NL.jpg",
        mainImg:"/photo.jpg",
        author:"Acharya Prashant",
        views:"500k",
        timestamp:"1 year ago"
    },

    {
        title:"Sold media outlets worshipping Modi amidst Manipur riots | NewsLaundry",
        image:"/NL.jpg",
        mainImg:"/photo.jpg",
        author:"newslaundry",
        views:"2M",
        timestamp:"5 days ago"
    }
]

export function VideoGrid() {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {
            VIDEO.map(video => <VideoCard key={video.author} mainImg={video.mainImg}
            title={video.title} image={video.image} author={video.author} views={video.views} timestamp={video.timestamp}/>)
        }
    </div>
}