import React from "react";
import { PageContainer } from "@ant-design/pro-layout";
import ProCard from "@ant-design/pro-card";
import ProForm, {
  ProFormDatePicker,
  ProFormField,
  ProFormFieldSet,
  ProFormGroup,
  ProFormList,
  ProFormSlider,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea
} from "@ant-design/pro-form";
import { Input } from "antd";
import TextArea from "antd/lib/input/TextArea";

const getTabData = (data) => {
  console.log(data);
  return "1";
};
export default () => (
  <div
    style={{
      background: "#F5F7FA"
    }}
  >
    <PageContainer
      fixedHeader
      header={{
        title: "Парковая улица, 30",

        breadcrumb: {
          routes: [
            {
              path: "",
              breadcrumbName: "Поиск"
            },
            {
              path: "",
              breadcrumbName: "Парковая улица"
            },
            {
              path: "",
              breadcrumbName: "30"
            }
          ]
        }
      }}
      tabProps={{
        test: 1
      }}
      tabBarExtraContent
      onTabChange={getTabData}
      tabList={[
        {
          tab: "Новая заявка",
          key: "1",
          data: { order_id: 123456 }
        },
        {
          tab: "История",
          key: "2",
          data: { order_id: 123456 }
        },
        {
          tab: "Услуги",
          key: "3",
          disabled: false
        },
        {
          tab: "Быстрый поиск",
          key: "4",
          data: { order_id: 123456 }
        }
      ]}
    >
      <ProCard
        direction="column"
        style={{ padding: 25 }}
        ghost
        gutter={[0, 16]}
      >
        <ProCard style={{ height: 200 }}>Content</ProCard>
        <ProFormText name="phone" placeholder={"phone"} />
        <ProCard gutter={16} ghost style={{ height: "auto" }}>
          <ProCard colSpan={16} lang="en-US">
            <ProForm direction={"vertical"}>
              <ProFormList
                subtitle={"Test"}
                children={
                  <ProFormGroup>
                    <ProFormField />
                    <ProFormField />
                  </ProFormGroup>
                }
              />
              <ProFormDatePicker />
              <ProFormFieldSet />
              <ProFormTextArea placeholder="Описание" />
              <ProFormSwitch />
            </ProForm>
          </ProCard>

          <ProCard colSpan={8} />
        </ProCard>
      </ProCard>
    </PageContainer>
  </div>
);
