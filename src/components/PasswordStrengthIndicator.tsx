export function PasswordStrengthIndicator({ strength }: { strength: number }) {
  const maxStrength = 4;

  return (
    <div style={{ width: "100%", backgroundColor: "#ddd" }}>
      <div
        style={{
          width: `${(strength / maxStrength) * 100}%`,
          backgroundColor: "green",
          height: "10px",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}
