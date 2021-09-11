import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

import defaultImage from "../assets/images/coffee-cup.jpg";

export default function CoverImage({ title, coverImage, slug }) {
  const theCoverImaeg = coverImage ? coverImage?.sourceUrl : defaultImage;
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={theCoverImaeg}
      blurDataURL={`/_next/image?url=${theCoverImaeg}&w=16&q=1`}
      placeholder="blur"
      loading="lazy"
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
