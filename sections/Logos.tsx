import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Logo {
  src?: ImageWidget;
  /** @description text alternative */
  altText?: string;
  /** @description Width of the logo in pixels */
  width?: number;
  /** @description Height of the logo in pixels */
  height?: number;
}

export interface Props {
  title?: string;
  logos?: Logo[];
}

const IMG_PLACEHODLER = Array(30).fill(0).map(() => ({
  src:
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/03fbcc78-ca86-4616-a59a-b8aa18331a9c",
  altText: "Logo",
  width: 200,
  height: 100,
}));

export default function Logos({
  title = "Edit this heading however you want",
  logos = IMG_PLACEHODLER,
}: Props) {
  const slideContent = (
    <div class="flex items-center gap-20">
      {logos?.map((logo) => {
        return (
          <Image
            src={logo.src || ""}
            alt={logo.altText || ""}
            width={logo.width || 200}
            height={logo.height || 100}
            class="w-auto h-auto object-contain"
          />
        );
      })}
    </div>
  );
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 py-6 lg:py-14">
      <div class="flex flex-col gap-14">
        <p class="text-center text-lg">{title}</p>
        <div class="relative w-full overflow-hidden">
          <div class="animate-sliding absolute top-0 left-0 flex flex-nowrap">
            {slideContent}
          </div>
        </div>
      </div>
    </div>
  );
}
