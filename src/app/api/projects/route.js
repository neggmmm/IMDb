import { NextResponse } from 'next/server';

const MOCKAPI_BASE_URL = 'https://68dd01ec7cd1948060ac09e9.mockapi.io/Movies/movies';

function json(data, init = {}) {
	return new NextResponse(JSON.stringify(data), {
		status: 200,
		headers: { 'content-type': 'application/json' },
		...init,
	});
}

function error(message, status = 500) {
	return json({ error: message }, { status });
}

export async function GET(req) {
	try {
		const { searchParams } = new URL(req.url);
		const id = searchParams.get('id');
		const url = id ? `${MOCKAPI_BASE_URL}/${encodeURIComponent(id)}` : MOCKAPI_BASE_URL;
		const res = await fetch(url, { cache: 'no-store' });
		if (!res.ok) {
			return error('Failed to fetch projects', res.status);
		}
		const data = await res.json();
		return json(data);
	} catch (e) {
		return error('Unexpected error while fetching projects', 500);
	}
}

export async function POST(req) {
	try {
		let body;
		try {
			body = await req.json();
		} catch {
			return error('Invalid JSON body', 400);
		}
		if (!body || typeof body !== 'object') {
			return error('Request body must be a JSON object', 400);
		}
		const res = await fetch(MOCKAPI_BASE_URL, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(body),
		});
		if (!res.ok) {
			return error('Failed to create project', res.status);
		}
		const data = await res.json();
		return json(data, { status: 201 });
	} catch (e) {
		return error('Unexpected error while creating project', 500);
	}
}

export async function PUT(req) {
	try {
		const { searchParams } = new URL(req.url);
		const id = searchParams.get('id');
		if (!id) {
			return error('Missing id query parameter', 400);
		}
		let body;
		try {
			body = await req.json();
		} catch {
			return error('Invalid JSON body', 400);
		}
		if (!body || typeof body !== 'object') {
			return error('Request body must be a JSON object', 400);
		}
		const res = await fetch(`${MOCKAPI_BASE_URL}/${encodeURIComponent(id)}`, {
			method: 'PUT',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(body),
		});
		if (!res.ok) {
			return error('Failed to update project', res.status);
		}
		const data = await res.json();
		return json(data);
	} catch (e) {
		return error('Unexpected error while updating project', 500);
	}
}

export async function PATCH(req) {
	return PUT(req);
}

export async function DELETE(req) {
	try {
		const { searchParams } = new URL(req.url);
		const id = searchParams.get('id');
		if (!id) {
			return error('Missing id query parameter', 400);
		}
		const res = await fetch(`${MOCKAPI_BASE_URL}/${encodeURIComponent(id)}`, {
			method: 'DELETE',
		});
		if (!res.ok) {
			return error('Failed to delete project', res.status);
		}
		return json({ success: true }, { status: 200 });
	} catch (e) {
		return error('Unexpected error while deleting project', 500);
	}
}