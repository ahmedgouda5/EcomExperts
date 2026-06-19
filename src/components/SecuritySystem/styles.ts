import styled from 'styled-components';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1200px',
};

export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  desktop: `@media (max-width: ${breakpoints.desktop})`,
  wide: `@media (max-width: ${breakpoints.wide})`,
};

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f7;
  padding: 32px 24px;

  ${media.tablet} {
    padding: 24px 16px;
  }

  ${media.mobile} {
    padding: 16px 12px;
  }
`;

export const PageHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto 40px;

  ${media.tablet} {
    margin-bottom: 32px;
  }

  ${media.mobile} {
    margin-bottom: 24px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 8px 0;
  letter-spacing: -0.02em;

  ${media.tablet} {
    font-size: 30px;
  }

  ${media.mobile} {
    font-size: 24px;
    margin-bottom: 6px;
  }
`;

export const PageDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
  line-height: 1.5;

  ${media.mobile} {
    font-size: 14px;
  }
`;

export const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;

  ${media.desktop} {
    grid-template-columns: 1fr 320px;
    gap: 24px;
  }

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const ProductColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const Section = styled.section`
  background: #fff;
  border-radius: 16px;
  padding: 28px;
  border: 1px solid #e8e8e8;

  ${media.tablet} {
    padding: 20px;
  }

  ${media.mobile} {
    padding: 16px;
    border-radius: 12px;
  }
`;

export const SectionLabel = styled.span`
  display: block;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #999;
  margin-bottom: 20px;

  ${media.mobile} {
    margin-bottom: 16px;
  }
`;

export const SectionDivider = styled.div`
  height: 1px;
  background: #eee;
  margin: 24px 0;

  ${media.mobile} {
    margin: 16px 0;
  }
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${media.mobile} {
    gap: 12px;
  }
`;

export const ProductRow = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr auto auto;
  align-items: center;
  gap: 16px;

  ${media.mobile} {
    grid-template-columns: 48px 1fr auto;
    gap: 12px;
  }
`;

export const ProductThumbnail = styled.div`
  width: 56px;
  height: 56px;
  background: #f0f0f0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.mobile} {
    width: 48px;
    height: 48px;
    border-radius: 10px;
  }
`;

export const ThumbnailIcon = styled.span`
  font-size: 24px;
  color: #999;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const ProductName = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${media.mobile} {
    font-size: 14px;
  }
`;

export const ProductDescription = styled.span`
  font-size: 13px;
  color: #888;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${media.mobile} {
    display: none;
  }
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f5f5f7;
  border-radius: 8px;
  padding: 6px 8px;

  ${media.mobile} {
    display: none;
  }
`;

export const QuantityButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  background: #fff;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #666;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;

  &:hover {
    background: #e8e8e8;
    color: #333;
  }
`;

export const QuantityValue = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  min-width: 20px;
  text-align: center;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`;

export const OldPrice = styled.span`
  font-size: 13px;
  color: #999;
  text-decoration: line-through;

  ${media.mobile} {
    font-size: 12px;
  }
`;

export const CurrentPrice = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #6c3ce0;

  ${media.mobile} {
    font-size: 14px;
  }
`;

export const MobilePriceInfo = styled.div`
  display: none;

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    grid-column: 2 / -1;
    margin-top: -4px;
  }
`;

export const CheckoutCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 28px;
  border: 1px solid #e8e8e8;
  position: sticky;
  top: 32px;
  align-self: flex-start;

  ${media.tablet} {
    position: static;
    order: 2;
  }

  ${media.tablet} {
    padding: 20px;
  }

  ${media.mobile} {
    padding: 16px;
    border-radius: 12px;
  }
`;

export const GuaranteeBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #f8f8fa;
  border-radius: 12px;
  margin-bottom: 24px;
`;

export const GuaranteeIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #e8e8e8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const GuaranteeIconInner = styled.span`
  font-size: 18px;
  color: #666;
`;

export const GuaranteeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const GuaranteeTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
`;

export const GuaranteeDescription = styled.span`
  font-size: 12px;
  color: #888;
  line-height: 1.4;
`;

export const SummaryDivider = styled.div`
  height: 1px;
  background: #eee;
  margin: 20px 0;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

export const SummaryLabel = styled.span`
  font-size: 14px;
  color: #666;
`;

export const SummaryValue = styled.span`
  font-size: 14px;
  color: #1a1a1a;
`;

export const OriginalTotalLabel = styled(SummaryLabel)`
  text-decoration: line-through;
  color: #999;
`;

export const OriginalTotalValue = styled(SummaryValue)`
  text-decoration: line-through;
  color: #999;
`;

export const FinalTotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 16px 0 8px;
`;

export const FinalTotalLabel = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
`;

export const FinalTotalValue = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;

  ${media.mobile} {
    font-size: 24px;
  }
`;

export const SavingsMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background: #f0faf0;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const SavingsIcon = styled.span`
  font-size: 14px;
  color: #22a52a;
`;

export const SavingsText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #22a52a;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 16px 24px;
  background: #6c3ce0;
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;
  margin-bottom: 16px;

  &:hover {
    background: #5a2dc0;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(108, 60, 224, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;

export const SaveForLaterLink = styled.button`
  width: 100%;
  padding: 12px 24px;
  background: transparent;
  color: #666;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.15s ease;

  &:hover {
    color: #333;
  }
`;