export default function NumbResult({ animes }) {
    return (
      <p className="search-results">
        Found <strong>{animes.length}</strong> results
      </p>
    );
  }