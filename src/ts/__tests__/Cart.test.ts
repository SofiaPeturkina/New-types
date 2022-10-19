import Cart from "../service/Cart";
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";
import Movie from "../domain/Movie";

test("new card should be empty", () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test("items should be added to the card", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(new Movie(1004, "Мстители IMAX", "The Avengers", 2012, "США", "Avengers Assemble!", ["фантастика", "боевик", "фэнтези", "приключения"], "137 мин. / 02:17", 1500));

  expect(cart.items.length).toBe(3);
});

test("method 'sumExcludeDiscount' should work correctly", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(new Movie(1004, "Мстители IMAX", "The Avengers", 2012, "США", "Avengers Assemble!", ["фантастика", "боевик", "фэнтези", "приключения"], "137 мин. / 02:17", 1500));

  expect(cart.sumExcludeDiscount()).toBe(4400);
});

test("method 'sumIncludeDiscount' should work correctly", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(new Movie(1004, "Мстители IMAX", "The Avengers", 2012, "США", "Avengers Assemble!", ["фантастика", "боевик", "фэнтези", "приключения"], "137 мин. / 02:17", 1500));

  expect(cart.sumIncludeDiscount(50)).toBe(2200);
});

test("method 'deleteItem' should work correctly", () => {
  const cart = new Cart();
  cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
  cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
  cart.add(new Movie(1004, "Мстители IMAX", "The Avengers", 2012, "США", "Avengers Assemble!", ["фантастика", "боевик", "фэнтези", "приключения"], "137 мин. / 02:17", 1500));
  cart.deleteItem(1001);

  expect(cart.items.length).toBe(2);
});
