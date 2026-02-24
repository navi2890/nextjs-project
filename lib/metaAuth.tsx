export const generateState = () => crypto.randomUUID();

export const getMetaAuthUrl = () => {
  const META_APP_ID = process.env.NEXT_PUBLIC_META_APP_ID!;
  const META_REDIRECT_URI = process.env.NEXT_PUBLIC_META_REDIRECT_URI!;
  // const META_SCOPE = process.env.NEXT_PUBLIC_META_SCOPE ?? "";
  const META_SCOPE =
    "instagram_basic,instagram_manage_insights,pages_show_list,pages_read_engagement,business_management";

  console.log("META_APP_ID:", META_APP_ID);
  console.log("META_REDIRECT_URI :", META_REDIRECT_URI);

  const params = new URLSearchParams({
    client_id: META_APP_ID,
    redirect_uri: META_REDIRECT_URI,
    scope: META_SCOPE,
    response_type: "code",
    state: generateState(),
  });

  return `https://www.facebook.com/v18.0/dialog/oauth?${params.toString()}`;
};
