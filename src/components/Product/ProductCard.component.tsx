import { Product } from "@/dtos/product.dto";
import Badge from "@/components/common/Badge.component";
import Txt from "@/components/common/Txt.component";
import SkeletonLoading from "@/components/common/SkeletonLoading.component";
import { pointByThree } from "@/functions/utils";

interface ProductCardProps {
  product: Product;
  isLoading?: boolean;
}

const ProductCard = ({ product, isLoading }: ProductCardProps) => {
  return (
    <SkeletonLoading
      className="h-fit cursor-pointer flex flex-col gap-2"
      isLoading={isLoading}
    >
      <div className="w-full overflow-hidden h-[62.5%]">
        <picture>
          <img
            className="hover:scale-110 transition-all ease-out duration-500"
            src={product.image}
            alt=""
          />
        </picture>
      </div>
      <Badge color="secondary" className="w-fit">
        무료배송
      </Badge>
      <Txt className="line-clamp-2">{product.productName}</Txt>
      <div>
        <Txt color="primary" typograph="h5">
          특별가
        </Txt>
        <Txt typograph="h5"> {pointByThree(product.price)} </Txt>
        <Txt typograph="h5">원 부터~</Txt>
      </div>
    </SkeletonLoading>
  );
};

export default ProductCard;