import React from 'react';
import { Collapse, Typography } from 'antd';
import styled from 'styled-components';
import { FileTextOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  
  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 48px;
  
  .header-icon {
    font-size: 48px;
    color: #1890ff;
    margin-bottom: 16px;
  }
`;

const DescriptionSection = styled.div`
  margin-bottom: 40px;
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledCollapse = styled(Collapse)`
  background: transparent;
  border: none;
  
  .ant-collapse-item {
    background: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    margin-bottom: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;
    
    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      border-color: #1890ff;
    }
    
    &.ant-collapse-item-active {
      border-color: #1890ff;
      box-shadow: 0 4px 12px rgba(24, 144, 255, 0.15);
    }
  }
  
  .ant-collapse-header {
    padding: 20px 24px;
    font-weight: 500;
    font-size: 16px;
    color: #262626;
    
    &:hover {
      color: #1890ff;
    }
  }
  
  .ant-collapse-content {
    border-top: 1px solid #f0f0f0;
    border-radius: 0 0 8px 8px;
  }
  
  .ant-collapse-content-box {
    padding: 20px 24px;
    
    ul {
      margin: 0;
      padding-left: 20px;
      
      li {
        margin-bottom: 12px;
        line-height: 1.8;
        color: #595959;
        font-size: 15px;
        
        &:last-child {
          margin-bottom: 0;
        }
        
        a {
          color: #1890ff;
          text-decoration: none;
          font-weight: 500;
          
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

export default function PlantillaCondiciones({ props }) {
    return (
        <Container>
            <HeaderSection>
                <FileTextOutlined className="header-icon" />
                <Title level={1} style={{ marginBottom: '16px', color: '#1a1a1a' }}>
                    {props.titulo}
                </Title>
            </HeaderSection>

            <DescriptionSection>
                <Paragraph style={{ 
                    fontSize: '16px', 
                    lineHeight: '1.8', 
                    color: '#595959',
                    margin: 0
                }}>
                    {props.descripcion}
                </Paragraph>
            </DescriptionSection>

            <StyledCollapse 
                accordion 
                items={props.items}
                expandIconPosition="end"
            />
        </Container>
    );
}
