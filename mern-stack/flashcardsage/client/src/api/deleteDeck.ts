export async function deleteDeck(deckId: string) {
  await fetch(`https://localhost:9000/decks/${deckId}`, {
    method: "DELETE",
  });
}
