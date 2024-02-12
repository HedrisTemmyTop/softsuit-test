interface FormattedDateTime {
  formattedDate: string;
  formattedTime: string;
}

function formatDateTime(inputDate: string): FormattedDateTime {
  const optionsDate: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };
  const optionsTime: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const date = new Date(inputDate);
  const formattedDate = new Intl.DateTimeFormat("en-IN", optionsDate).format(
    date
  );
  const formattedTime = new Intl.DateTimeFormat("en-US", optionsTime).format(
    date
  );

  return { formattedDate, formattedTime };
}

export default formatDateTime;
