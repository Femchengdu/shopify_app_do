import { Page } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { NftCampaignForm } from "../../components";

export default function ManageCode() {
  const breadcrumbs = [{ content: "NFT campaigns", url: "/" }];

  return (
    <Page>
      <TitleBar
        title="Create new NFT campaign"
        breadcrumbs={breadcrumbs}
        primaryAction={null}
      />
      <NftCampaignForm />
    </Page>
  );
}
