const API_BASE_URL = "https://playground.4geeks.com/contact";
const AGENDA_SLUG = "marcel-contacts";

export async function getContacts() {
  const res = await fetch(`${API_BASE_URL}/agendas/${AGENDA_SLUG}/contacts`);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.msg || "Failed to fetch contacts");
  }
  const contacts = await res.json();
  return contacts;
}

export async function createContact(data) {
  const contactData = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    address: data.address,
    agenda_slug: AGENDA_SLUG,
  };

  const res = await fetch(`${API_BASE_URL}/agendas/${AGENDA_SLUG}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.msg || "Failed to create contact");
  }

  const result = await res.json();
  return result;
}

export async function deleteContact(contactId) {
  const res = await fetch(
    `${API_BASE_URL}/agendas/${AGENDA_SLUG}/contacts/${contactId}`,
    { method: "DELETE" }
  );

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.msg || "Failed to delete contact");
  }

  return true;
}

export async function updateContact(contact) {
  const res = await fetch(
    `${API_BASE_URL}/agendas/${AGENDA_SLUG}/contacts/${contact.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        address: contact.address,
      }),
    }
  );

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.msg || "Failed to update contact");
  }

  return await res.json();
}

