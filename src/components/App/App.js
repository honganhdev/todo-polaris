import React, { useCallback, useRef, useState } from "react";
import { AppProvider, ActionList, Frame, TopBar } from "@shopify/polaris";
import PageTodo from "../Page/Page";

export default function FrameExample() {
  const skipToContentRef = useRef(null);
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchResultsDismiss = useCallback(() => {
    setSearchActive(false);
    setSearchValue("");
  }, []);
  const handleSearchFieldChange = useCallback((value) => {
    setSearchValue(value);
    setSearchActive(value.length > 0);
  }, []);

  const userMenuMarkup = <TopBar.UserMenu name="Dharma" initials="D" />;

  const searchResultsMarkup = (
    <ActionList
      items={[
        { content: "Shopify help center" },
        { content: "Community forums" },
      ]}
    />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchFieldChange}
      value={searchValue}
      placeholder="Search"
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchResultsVisible={searchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
    />
  );

  const theme = {
    logo: {
      width: 40,
      topBarSource:
        "https://firebasestorage.googleapis.com/v0/b/pdf-invoice-4717c.appspot.com/o/images%2Flogos%2Favada_logo.png?alt=media&token=2c9efee0-1e54-4316-9039-45cf78d5737b",
      contextualSaveBarSource:
        "https://firebasestorage.googleapis.com/v0/b/pdf-invoice-4717c.appspot.com/o/images%2Flogos%2Favada_logo.png?alt=media&token=2c9efee0-1e54-4316-9039-45cf78d5737b",
      url: "http://jadedpixel.com",
      accessibilityLabel: "Jaded Pixel",
    },
  };

  return (
    <div style={{ height: "500px" }}>
      <AppProvider theme={theme}>
        <Frame
          topBar={topBarMarkup}
          skipToContentTarget={skipToContentRef.current}
        >
          <PageTodo />
        </Frame>
      </AppProvider>
    </div>
  );
}
