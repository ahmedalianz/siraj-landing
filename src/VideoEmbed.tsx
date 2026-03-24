interface VideoEmbedProps {
  title?: string;
  videoId?: string;
}

export function VideoEmbed({
  title = "شرح نظام سراج",
  videoId,
}: VideoEmbedProps) {
  return (
    <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
