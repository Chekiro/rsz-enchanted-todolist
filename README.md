# 📝 Enchanted TodoList

Projekt TodoLista Ulepszona to aplikacja umożliwiająca tworzenie, edycję i usuwanie zadań do wykonania (todo). Dodatkową funkcjonalnością jest możliwość przeciągania zadań pomiędzy kolumnami oraz dodawania obrazków do poszczególnych zadań. Dane są przechowywane na platformie [Appwrite](https://appwrite.io/).

## 🚀 Technologie

- [Next.js](https://nextjs.org/) - Framework React do budowania interfejsów stron internetowych
- [TypeScript](https://www.typescriptlang.org/) - Język programowania
- [Zustand](https://zustand.surge.sh/) - Biblioteka do zarządzania globalnym stanem aplikacji

## 🎯 Funkcje

- Dodawanie nowych zadań do listy
- Przeciąganie zadań pomiędzy kolumnami
- Dodawanie obrazków do zadań
- Usuwanie zadań
- Wyszukiwanie zadań i ich filtrowanie

## 🌐 Appwrite Integration

Aplikacja korzysta z platformy Appwrite do przechowywania danych. Upewnij się, że masz skonfigurowane odpowiednie parametry w pliku konfiguracyjnym.

```json
{
  "appwrite": {
    "endpoint": "https://api.appwrite.io/v1",
    "project": "YOUR_PROJECT_ID",
    "collection": "todoCollection",
    "apiKey": "YOUR_API_KEY"
  }
}
```

## 🔗 Link to page preview

https://rs-todo-chekiro-chekiros-projects.vercel.app/
