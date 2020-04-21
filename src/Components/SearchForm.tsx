import { Box, Grid, IconButton, Input } from "@chakra-ui/core"
import React, { useState } from "react"

interface Props {
  close: () => void
  getValue: (value: string) => void
}

const SearchForm = (props: Props) => {
  const [searchText, setSearchText] = useState("")
  const [error, setError] = useState("")
  function handleSearch() {
    if (searchText.trim().length > 0) {
      props.getValue(searchText)
      setError("")
      setSearchText("")
    } else {
      setError("Please type a valid search text")
    }
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSearch()
    }
  }
  return (
    <Grid column="1" justifyContent="center">
      <Grid templateColumns="1fr 5fr 2fr" gridGap="1">
        <IconButton
          color="red.500"
          aria-label="Close"
          icon="close"
          onClick={props.close}
        ></IconButton>
        <Box>
          <Input
            autoFocus={true}
            onKeyPress={handleKeyPress}
            placeholder="Search Here..."
            value={searchText}
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSearchText(event.target.value)
            }}
            variant="outline"
          ></Input>
        </Box>
        <IconButton
          onClick={handleSearch}
          color="green.500"
          aria-label="Search"
          icon="search"
        ></IconButton>
      </Grid>
      {error && !searchText && <Grid column="1">{error}</Grid>}
    </Grid>
  )
}

export default SearchForm
