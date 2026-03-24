interface VideoEmbedProps {
  title?: string;
  videoId?: string; 
}

export function VideoEmbed({
  title = "شرح نظام سراج",
  videoId = "https://youtube.com/shorts/SA5wdqJVrD4",
}: VideoEmbedProps) {
  return (
    <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
