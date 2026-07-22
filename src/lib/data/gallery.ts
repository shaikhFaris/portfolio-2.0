export interface ComponentShowcase {
  title: string;
  description?: string;
  image: string;
  poster?: string;
  video?: string;
}

const gallery: ComponentShowcase[] = [
  {
    title: "Infinite Scroll",
    image: "/gallery/infinite-scroll.png",
    poster: "/gallery/infinite-scroll.png",
    video: "/gallery/infinite-scroll.mp4",
  },
  {
    title: "Debounced Search",
    image: "/gallery/debounce.png",
    poster: "/gallery/debounce.png",
    video: "/gallery/debounce.mp4",
  },
  {
    title: "Job Processing",
    image: "/gallery/job-processing.png",
    poster: "/gallery/job-processing.png",
    video: "/gallery/job-processing.mp4",
  },
  {
    title: "Throttled Progress Bar",
    image: "/gallery/throttled-progress.png",
    poster: "/gallery/throttled-progress.png",
    video: "/gallery/throttled-progress.mp4",
  },
];

export default gallery;
