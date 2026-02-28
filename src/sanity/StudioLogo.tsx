export function StudioLogo() {
  return (
    <img
      src="/images/logo-signature.png"
      alt="Dr. Cindy"
      style={{ height: 28, objectFit: "contain" }}
    />
  );
}

export function StudioNavbar(props: { renderDefault: (props: any) => React.ReactNode } & Record<string, any>) {
  const { renderDefault, ...rest } = props;
  return (
    <div>
      <div
        style={{
          background: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #0d0d0d 100%)",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "3px solid #FFC300",
          boxShadow: "0 4px 20px rgba(255, 195, 0, 0.15)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img
            src="/images/logo-signature.png"
            alt="Dr. Cindy"
            style={{
              height: 38,
              objectFit: "contain",
              filter: "drop-shadow(0 0 8px rgba(255, 195, 0, 0.3))",
            }}
          />
          <div
            style={{
              width: 1,
              height: 24,
              background: "linear-gradient(to bottom, transparent, #FFC300, transparent)",
            }}
          />
          <span
            style={{
              color: "#FFC300",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Content Studio
          </span>
        </div>
        <span
          style={{
            color: "rgba(255, 253, 240, 0.4)",
            fontSize: 10,
            fontWeight: 400,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          First Lady of Sales
        </span>
      </div>
      {renderDefault(rest)}
    </div>
  );
}
