import { Shield, RotateCcw, Minus, Plus, ShoppingCart, Camera, Cpu, Radio, FileText } from 'lucide-react';
import { mockData } from './mockData';
import * as S from './styles';

const categoryIcons: Record<string, React.ReactNode> = {
  camera: <Camera size={22} />,
  sensor: <Radio size={22} />,
  accessory: <Cpu size={22} />,
  plan: <FileText size={22} />,
};

const formatPrice = (price: number): string =>
  `$${price.toFixed(2)}`;

interface ProductRowProps {
  id: string;
  name: string;
  description?: string;
  price: number;
  oldPrice?: number;
  quantity: number;
  category: string;
}

const ProductRowComponent = ({ name, description, price, oldPrice, quantity, category }: ProductRowProps) => (
  <>
    <S.ProductRow>
      <S.ProductThumbnail>
        <S.ThumbnailIcon>{categoryIcons[category]}</S.ThumbnailIcon>
      </S.ProductThumbnail>
      <S.ProductInfo>
        <S.ProductName>{name}</S.ProductName>
        {description && <S.ProductDescription>{description}</S.ProductDescription>}
      </S.ProductInfo>
      <S.QuantitySelector>
        <S.QuantityButton><Minus size={14} /></S.QuantityButton>
        <S.QuantityValue>{quantity}</S.QuantityValue>
        <S.QuantityButton><Plus size={14} /></S.QuantityButton>
      </S.QuantitySelector>
      <S.PriceContainer>
        {oldPrice && <S.OldPrice>{formatPrice(oldPrice)}</S.OldPrice>}
        <S.CurrentPrice>{formatPrice(price)}</S.CurrentPrice>
      </S.PriceContainer>
    </S.ProductRow>
    <S.MobilePriceInfo>
      {oldPrice && <S.OldPrice>{formatPrice(oldPrice)}</S.OldPrice>}
      <S.CurrentPrice>{formatPrice(price)}</S.CurrentPrice>
    </S.MobilePriceInfo>
  </>
);

const SecuritySystemPage = () => {
  const { cameras, sensors, accessories, plans, summary } = mockData;

  const renderSection = (
    label: string,
    items: typeof cameras,
    showDivider = true
  ) => (
    <S.Section>
      <S.SectionLabel>{label}</S.SectionLabel>
      <S.ProductList>
        {items.map((item) => (
          <ProductRowComponent key={item.id} {...item} />
        ))}
      </S.ProductList>
      {showDivider && <S.SectionDivider />}
    </S.Section>
  );

  return (
    <S.PageContainer>
      <S.PageHeader>
        <S.PageTitle>Your security system</S.PageTitle>
        <S.PageDescription>
          Customize your home security package with cameras, sensors, and professional monitoring.
        </S.PageDescription>
      </S.PageHeader>

      <S.ContentLayout>
        <S.ProductColumn>
          {renderSection('Cameras', cameras)}
          {renderSection('Sensors', sensors)}
          {renderSection('Accessories', accessories)}
          {renderSection('Plan', plans, false)}
        </S.ProductColumn>

        <S.CheckoutCard>
          <S.GuaranteeBadge>
            <S.GuaranteeIcon>
              <S.GuaranteeIconInner>
                <Shield size={18} />
              </S.GuaranteeIconInner>
            </S.GuaranteeIcon>
            <S.GuaranteeContent>
              <S.GuaranteeTitle>30-day hassle-free returns</S.GuaranteeTitle>
              <S.GuaranteeDescription>
                Not satisfied? Return your system within 30 days for a full refund, no questions asked.
              </S.GuaranteeDescription>
            </S.GuaranteeContent>
          </S.GuaranteeBadge>

          <S.SummaryDivider />

          <S.SummaryRow>
            <S.OriginalTotalLabel>Original price</S.OriginalTotalLabel>
            <S.OriginalTotalValue>{formatPrice(summary.originalTotal)}</S.OriginalTotalValue>
          </S.SummaryRow>

          <S.FinalTotalRow>
            <S.FinalTotalLabel>Total today</S.FinalTotalLabel>
            <S.FinalTotalValue>{formatPrice(summary.finalTotal)}</S.FinalTotalValue>
          </S.FinalTotalRow>

          <S.SavingsMessage>
            <S.SavingsIcon><RotateCcw size={14} /></S.SavingsIcon>
            <S.SavingsText>You save {formatPrice(summary.savings)}</S.SavingsText>
          </S.SavingsMessage>

          <S.CheckoutButton>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <ShoppingCart size={18} />
              Checkout
            </span>
          </S.CheckoutButton>

          <S.SaveForLaterLink>
            Save my system for later
          </S.SaveForLaterLink>
        </S.CheckoutCard>
      </S.ContentLayout>
    </S.PageContainer>
  );
};

export default SecuritySystemPage;